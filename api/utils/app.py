import mysql.connector
from mysql.connector import Error

def connect():
    """ Connect to MySQL database """
    conn = None
    try:
        conn = mysql.connector.connect(host='127.0.0.1',
                                       database='program_application',
                                       user='root',
                                       password='')
        if conn.is_connected():
        
            print('Connected to MySQL database')
            return conn
        else:
            return conn

    except Error as e:
        print(e)