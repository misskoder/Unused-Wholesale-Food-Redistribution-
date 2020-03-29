This is the front end for the wholesale food redistribution app

## Steps to Set up Backend
cd db/project

### Create your OSX virtual environment in Terminal:

python -m venv FoodconnectEnv
source ./FoodconnectEnv/bin/activate
pip install -r requirements.txt

### Build your database from existing models:

python manage.py makemigrations
python manage.py migrate
