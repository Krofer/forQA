import logging
import sys
from app import create_app

# Настройка логгера
logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
logger = logging.getLogger(__name__)

logger.debug("Starting wsgi.py")

app = create_app()

logger.debug("Created app")

if __name__ == "__main__":
    app.run()
