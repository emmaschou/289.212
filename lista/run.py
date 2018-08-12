from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


PLAYLISTDB = 'playlist.db'

print(PLAYLISTDB)


@app.route('/createdlista')
def createplaylist():
    playlist = []

    con = sqlite3.connect(PLAYLISTDB)
    cur = con.execute('SELECT song, artist, album FROM songs WHERE mood=="on" AND idk)
    for row in cur:
      songs.append(list(row))
