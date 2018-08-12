# 289.212

# terminal commands

## ls
lists directory/folder contents

## cd
changes directory

## cd..
changes to parent directory

## mkdir
make directory

## rmdir
remove directory

# Python projects

## create a virtual environment
python3 -m venv env  
source env/bin/activate  
pip install flask  

## running flask
cd ( to directory )  
source env/bin/activate  
export FLASK_APP=run.py   
export FLASK_DEBUG=1  
flask run


# sql tings

## easier to view with tables
.headers on   
.mode column  
.width 5 30 10  

## create table

sqlite> DROP TABLE burgers;  
sqlite> .tables  
sqlite> CREATE TABLE burgers(  
   ...> id INTEGER PRIMARY KEY,  
   ...> burger TEXT UNIQUE NOT NULL,  
   ...> price FLOAT NOT NULL  
   ...> );  
sqlite> SELECT * FROM burgers;  

## view table i guess in terminal

SELECT * FROM "tablename";  
.tables

## super()
content and added on content not replaced

## name="name"
name is equal to whatever was picked?
must be unique
name="{{ burger[0] }}"

burger name in list is 0 not price which is 1
