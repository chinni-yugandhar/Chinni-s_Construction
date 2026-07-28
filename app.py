from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import os

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "chinni-construction-secret-dev")

# Web3Forms access key (free, no backend needed for email delivery)
WEB3FORMS_ACCESS_KEY = os.environ.get("WEB3FORMS_ACCESS_KEY", "YOUR_WEB3FORMS_ACCESS_KEY")


@app.context_processor
def inject_globals():
    return {
        "business_name": "Chinni's Construction",
        "business_phone": "+91 9948107035",
        "business_phone_raw": "7993275944",
        "business_email": "chinniconstruction@gmail.com",
        "business_location": "E.G Dist, Andhra pradesh, India",
        "web3forms_key": WEB3FORMS_ACCESS_KEY,
    }


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/services")
def services():
    return render_template("services.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/rent-materials")
def rent_materials():
    return render_template("rent_materials.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/enquiry")
def enquiry():
    return render_template("enquiry.html")


@app.route("/api/enquiry", methods=["POST"])
def api_enquiry():
    """Receive enquiry form submission and forward to Web3Forms."""
    import urllib.request
    import urllib.parse
    import json

    data = request.get_json(silent=True) or request.form.to_dict()

    payload = {
        "access_key": WEB3FORMS_ACCESS_KEY,
        "subject": f"New Enquiry - {data.get('service_needed', 'General')}",
        "from_name": "Chinni's Construction Website",
        "name": data.get("name", ""),
        "email": data.get("email", "not-provided@website.com"),
        "phone": f"Phone: {data.get('phone', '')}",
        "location": f"Location: {data.get('location', '')}",
        "service_needed": f"Service: {data.get('service_needed', '')}",
        "budget": f"Budget: {data.get('budget', '')}",
        "message": data.get("message", ""),
    }

    try:
        req = urllib.request.Request(
            "https://api.web3forms.com/submit",
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json", "Accept": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode("utf-8"))
        return jsonify({"success": result.get("success", False), "result": result})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
