USE employees;

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Manager', 75000.00, 1),  
    ('Sales Representative', 50000.00, 1), 
    ('Software Engineer', 85000.00, 2),  
    ('Product Manager', 90000.00, 2),  
    ('Financial Analyst', 70000.00, 3),  
    ('Legal Counsel', 80000.00, 4);  

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),  
    ('Jane', 'Smith', 2, 1),   
    ('Alice', 'Johnson', 3, NULL),  
    ('Bob', 'Brown', 4, 3),  
    ('Eva', 'Williams', 5, NULL),  
    ('David', 'Lee', 6, NULL);
