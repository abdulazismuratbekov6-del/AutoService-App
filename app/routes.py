from flask import Blueprint, flash, redirect, render_template, request, url_for

from .data import HISTORY, MECHANICS, PRODUCTS, SERVICES

web = Blueprint("web", __name__)


@web.get("/")
def home():
    return render_template("home.html")


@web.route("/garage", methods=["GET", "POST"])
def garage():
    if request.method == "POST":
        vin = request.form.get("vin", "").strip().upper()
        if len(vin) != 17:
            flash("VIN должен содержать ровно 17 символов.", "error")
        else:
            flash(f"Автомобиль с VIN {vin} найден и готов к добавлению.", "success")
        return redirect(url_for("web.garage"))
    return render_template("garage.html")


@web.route("/service", methods=["GET", "POST"])
def service():
    if request.method == "POST":
        flash("Запись создана. Статус: ожидает подтверждения.", "success")
        return redirect(url_for("web.service"))
    return render_template("service.html", services=SERVICES, mechanics=MECHANICS)


@web.get("/shop")
def shop():
    return render_template("shop.html", products=PRODUCTS)


@web.get("/history")
def history():
    return render_template("history.html", records=HISTORY)
