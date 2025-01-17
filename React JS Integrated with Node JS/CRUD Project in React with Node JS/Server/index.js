const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataBase = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));

let conn = dataBase.createConnection(
    {
        host : "localhost",
        user : "Sethu-Siva",
        password : "5656",
        database : "customer"
    }
);

conn.connect((error) => {
    
    if( error )
    {
        console.log(error);
    }
    else
    {
        console.log("DataBase Connected SuccessFully...!");
    }
});

app.get("/getAllCustDetails", (request,response) => {

    let sqlQuery = 'select * from customer_details';

    conn.query(sqlQuery,(error,result) => {
        
        if( error )
        {
            response.send(error);
        }
        else
        {
            response.send(result);
        }
    })
});

app.post("/insertCustomer", (request,response) => {

    let { cust_name,address,city,pincode,country } = request.body;

    let sqlQuery = 'insert into customer_details (cust_name,address,city,pincode,country) values (?,?,?,?,?)';

    conn.query(sqlQuery,[cust_name,address,city,pincode,country],(error,result) => {

        if( error )
        {
            let status = {
                "status" : "Error"
            }
            response.send(status);
            
            console.log(error);
            
        }
        else
        {
            let status = {
                "status" : "Success"
            }
            response.send(status);
        }
    })
});

app.get("/getCustDetail/:cust_id" ,(request,response) => {

    let cust_id = request.params.cust_id;

    let sqlQuery = 'select * from customer_details where cust_id = ?';

    conn.query(sqlQuery,[cust_id], (error,result) => {

        if ( error )
        {
            response.send(error);
        }
        else
        {
            response.send(result);
        }
    })
});


app.post("/deleteCust", (request,response) => {

    let cust_id = request.body.cust_id;

    let sqlQuery = 'delete from customer_details where cust_id = ?';

    conn.query(sqlQuery,[cust_id], (error,result) => {

        if ( error )
        {
            let status = {
                "status" : "Error"
            }
            response.send(status);
        }
        else
        {
            let status = {
                "status" : "Success"
            }
            response.send(status);
        }
    })
});

app.put("/update/:cust_id",(request,response) => {

    let { cust_name,address,city,pincode,country } = request.body;

    let cust_id = request.params.cust_id;

    let sqlQuery = 'update customer_details set cust_name = ?, address = ?, city = ?, pincode = ?, country = ? where cust_id = ?';

    conn.query(sqlQuery,[cust_name,address,city,pincode,country,cust_id], (error,result) => {

        if ( error )
        {
            let status = { "status" : "Error" };
            response.send(status);
        }
        else
        {
            let status = { "status" : "Success" };
            response.send(status);
        }
    })
});

let port = 7200;

app.listen(port, () => {
    console.log(`Server started in Port : ${port}`);
});