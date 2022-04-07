USE hr;
-- 1
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM employees AS Employee
INNER JOIN employees AS Manager
ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;

-- 2
SELECT CONCAT(Manager.first_name, ' ', Manager.LAST_NAME) AS Fll_Name, COUNT(*)
FROM hr.employees AS Manager
INNER JOIN employees AS Employee
ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY Manager.EMPLOYEE_ID;