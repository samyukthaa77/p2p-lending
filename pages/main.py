import json
import pymysql
import pymysql.cursors
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def api(event, context):
    # TODO implement
    rds_host = "pbl-demo-db.cwjybtibkuah.us-west-2.rds.amazonaws.com"
    name = "admin"
    password = "admin123"
    db_name = "p2p-lending"
    connection = ""
    
    try:
        connection = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name)
    except pymysql.MySQLError as e:
        logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
        logger.error(e)
    logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

    if (event['method'] == 'register'):
        result = register(event, connection)
        return result
    if (event['method'] == 'login'):
        result = login(event, connection)
        return result
    if (event['method'] == 'kyc_lender'):
        result = kyc_lender(event, connection)
        return result
    if (event['method'] == 'kyc_borrower'):
        result = kyc_borrower(event, connection)
        return result

def register(event, connection):
    """
    This function does the registration of new users in the users table by taking Name, email and password (MD5).
    """
    email = event["email"]
    name = event["name"]
    password = event["password"]

    failure_message = {
    	"code": "0",
    	"message": "Emai-id already exists!!"
    }

    success_message = {
    	"code": "1",
    	"message": "User registered successfully!"
    }

    with connection.cursor() as user_check_cursor:
        user_check_sql = "SELECT * from `user` WHERE `email`=%s"
        user_check_cursor.execute(user_check_sql, email)
        user_check = user_check_cursor.fetchone()
        if (user_check_cursor.rowcount == 1):
        	logger.info("User found in users table") 
            return failure_message
        with connection.cursor() as user_cursor:
            user_insert_sql = "INSERT INTO `user` (`name`, `password`, `email`) VALUES (%s, %s, %s)"
            user_tuple = (name, password, email)
            user_cursor.execute(user_insert_sql, user_tuple)
            user_id = user_cursor.lastrowid
            connection.commit()
    return success_message

def login(event, connection):
	"""
		Login function which checks if email and password matches the existing values
	"""
	failure_message = {
		"status": "0",
		"message": "Email or Password is incorrect. Please try again."
	}

	email1 = event['email']
	password1 = event['password']

	with connection.cursor() as user_cursor:
		user_sql = "SELECT * from `user` WHERE `email`=%s and `password`=%s"
		user_cursor.execute(user_sql, (email1, password1,))
		user = user_cursor.fetchone()
		if user_cursor.rowcount == 0:
			return failure_message
		print (user)
		success_message = {
				"status":"1",
				"user_id": user[0],
				"name": user[2],
				"email": user[1]
		}

	return success_message

# KYC - LENDER
def kyc_lender(event, connection):
    """
        Know your customer documents are inserted for lenders
    """
    id = event["id"]
    pan = event["pan"]
    aadhar = event["aadhar"]
    bank_acc = event["bank_acc"]
    dob = event["dob"]

    failure_message = {
    	"code": "0",
    	"message": "Something went wrong!"
    }

    success_message = {
    	"code": "1",
    	"message": "Docs inserted successfully"
    }

    with connection.cursor() as user_check_cursor:
        user_check_sql = "SELECT * from `user` WHERE `id`=%s"
        user_check_cursor.execute(user_check_sql, id)
        user_check = user_check_cursor.fetchone()
        if user_check_cursor.rowcount == 0:
        	return failure_message
        with connection.cursor() as user_cursor:
            user_insert_sql = "INSERT INTO `kyc_docs` (`user_id`, `pan`, `aadhar`, `bank_acc`, `dob`) VALUES (%s, %s, %s, %s, %s)"
            user_tuple = (id, pan, aadhar, bank_acc, dob)
            user_cursor.execute(user_insert_sql, user_tuple)
            user_id = user_cursor.lastrowid
            connection.commit()
    return success_message

# KYC - BORROWER
def kyc_borrower(event, connection):
    """
        Know your customer documents are inserted for borrower
    """
    id = event["id"]
    address = event["address"]
    proof_add = event["proof_add"]
    dob = event["dob"]
    sdwh = event["sdwh"]
    occ = event["occ"]
    pan = event["pan"]
    aadhar = event["aadhar"]
    ann_inc = event["ann_inc"]
    emp_proof= event["emp_proof"]
    bank_acc = event["bank_acc"]
    

    failure_message = {
    	"code": "0",
    	"message": "Something went wrong!"
    }

    success_message = {
    	"code": "1",
    	"message": "Docs inserted successfully"
    }

    with connection.cursor() as user_check_cursor:
        user_check_sql = "SELECT * from `user` WHERE `id`=%s"
        user_check_cursor.execute(user_check_sql, id)
        user_check = user_check_cursor.fetchone()
        if user_check_cursor.rowcount == 0:
        	return failure_message
        with connection.cursor() as user_cursor:
            user_insert_sql = "INSERT INTO `kyc_docs` (`user_id`,`address`,`proof_add`,`dob`,`sdwh`,`occ`, `pan`, `aadhar`,`ann_inc`,`age`,`emp_proof`, `bank_acc`) VALUES (%s, `%s`, `%s`, %s, `%s`, `%s`, %s, %s, %s, %s, `%s`, %s)"
            user_tuple = (id , address, proof_add , dob ,sdwh ,occ ,pan ,aadhar, ann_inc ,emp_proof,bank_acc )
            user_cursor.execute(user_insert_sql, user_tuple)
            user_id = user_cursor.lastrowid
            connection.commit()
    return success_message