from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

PLAYLISTDB = 'playlist.db'


@app.route('/')
def index():
  # con = sqlite3.connect(PLAYLISTDB)
  # playlist = createplaylist(con)
  # con.close()

  return render_template('index.html')



@app.route('/createdlista', methods=['POST'])
def createdlista():
  query = 'where '

  for name in request.form:
    if name[0:3] == 'gen':
      query += ('genre = ' + '\'' + request.form[name] + '\'' + ' and ')
    if name[0:3] == 'col':
      query += ('color = ' + '\'' + request.form[name] + '\'' + ' and ')
    if name[0:3] == 'moo':
      query += ('mood = ' + '\'' + request.form[name] + '\'' + ' and ')

  query = query[0:-5]

  playlist = []

  con = sqlite3.connect(PLAYLISTDB)
  cur = con.execute('select * from songs ' + query)
  for row in cur:
    playlist.append(list(row))
  con.close()

  return render_template('createdlista.html', playlist=playlist, query=query)
