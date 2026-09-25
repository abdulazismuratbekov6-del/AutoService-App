from flask import Flask


def create_app() -> Flask:
    """Фабрика приложения AutoCare."""
    app = Flask(
        __name__,
        template_folder="templates",
        static_folder="../src/styles",
        static_url_path="/static",
    )
    app.config.from_mapping(
        SECRET_KEY="change-this-key-in-production",
        JSON_AS_ASCII=False,
    )

    from .routes import web

    app.register_blueprint(web)
    return app
