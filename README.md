This is the front end for the wholesale food redistribution app

<h2>Steps to Set up Backend</h2>
cd db/project

<h3>Create your OSX virtual environment in Terminal:</h3>

python -m venv FoodconnectEnv
source ./FoodconnectEnv/bin/activate
pip install -r requirements.txt

<h3>Build your database from existing models:</h3>

python manage.py makemigrations
python manage.py migrate
