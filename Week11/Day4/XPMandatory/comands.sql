SELECT first_name AS "First Name", last_name  AS "Last Name"
FROM employees;

SELECT DISTINCT department_id
FROM employees;

SELECT *
FROM employees
ORDER BY first_name DESC;

SELECT  first_name, last_name AS "First Name, Last Name", salary, salary* 5/100 AS "PF" 
FROM employees;

SELECT employee_id, first_name, last_name  AS "First Name, Last Name", salary
FROM employees
ORDER BY salary;

SELECT SUM(salary)
FROM employees;

SELECT MAX(salary), MIN(salary)
FROM employees;

SELECT AVG(salary)
FROM employees;

SELECT COUNT(employee_id)
FROM employees;

SELECT UPPER(first_name)
FROM employees;

SELECT SUBSTRING(first_name, 1, 3)
FROM employees;

SELECT CONCAT (first_name, last_name) AS "FULL NAME"
FROM employees;

SELECT first_name || ' ' || last_name AS FULLNAME , length(first_name || last_name) 
FROM employees;

SELECT first_name 
FROM employees 
WHERE  first_name 
SIMILAR TO   '%0|1|2|3|4|5|6|7|8|9%';

SELECT * 
FROM employees
LIMIT 10;

/*Restricting And Sorting*/

SELECT first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 10000 AND 15000;

SELECT first_name, last_name, hire_date
FROM employees
WHERE hire_date >= '01-01-1987' AND hire_date < '01-01-1988';

SELECT first_name
FROM employees
WHERE first_name LIKE '%c%' AND  first_name LIKE '%e%';

SELECT last_name, job_title, salary
FROM employees
INNER JOIN jobs 
ON employees.job_id = jobs.job_id
WHERE job_title NOT LIKE 'Programmer' AND  job_title NOT LIKE 'Shipping Clerk'  AND  salary NOT IN (4500, 10000, 15000);

SELECT last_name
FROM employees
WHERE last_name LIKE '______';

SELECT last_name
FROM employees
WHERE last_name LIKE '__e%';

SELECT DISTINCT job_title
FROM employees
INNER JOIN jobs 
ON employees.job_id = jobs.job_id;

SELECT *
FROM employees 
WHERE last_name IN ('JONES','BLAKE','SCOTT','KING','FORD');