
-- Fill Departement Dimention :
INSERT INTO database_warehouse.department_dim VALUES (1,'Mathematics & Computation'),(2,'Digital Media & Entertainment Technology');

-- Fill Professor Dimention :
INSERT INTO database_warehouse.professors_dim ( professor_id, job_title,first_name,last_name,gender,contact_email,contact_phone,office_number,webpage,date_of_birth )
SELECT  DISTINCT professor_id, job_title, first_name,last_name,gender,contact_email,contact_phone,office_number,webpage,date_of_birth  
FROM   nlidb.professors;

-- Fill Publication Dimention :
INSERT INTO database_warehouse.publications_dim ( publication_id,publication_title,publication_abstract,journal_name,conference_name)
SELECT  DISTINCT publication_id,publication_title,publication_abstract,journal,conference
FROM   nlidb.publications;

-- Fill Research_Interest Dimention :
INSERT INTO database_warehouse.research_interest_dim (research_area_id,research_area_title,research_area_description )
SELECT  DISTINCT research_area_id,research_area_title,research_area_description
FROM   nlidb.research_interest;

-- Fill Research_Project Dimention :
INSERT INTO database_warehouse.research_projects_dim (research_project_id,research_project_title,research_project_description )
SELECT  DISTINCT research_project_id,research_project_title,research_project_description
FROM   nlidb.research_projects;

-- Fill Research_Student Dimention :
INSERT INTO database_warehouse.research_students_dim (student_id,student_name,student_email,research_project_title,research_project_description)
SELECT  DISTINCT student_id,student_name,student_email,research_project_title,research_project_description
FROM   nlidb.research_students;

-- Fill Calender Dimention :
INSERT INTO database_warehouse.calender_dim (item_id,title,description,week_day,time_from,time_to,location,flag,flag_description,start_date,end_date)
SELECT  DISTINCT item_id,title,description,week_day,time_from,time_to,location,flag,flag_description,start_date,end_date
FROM   nlidb.calendar;
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------> need Review 
-- Fill Fact Table : 


insert into  database_warehouse.table_research_fact (  research_area_id ,research_project_id,student_id, publication_id, professor_id , department_id,item_id)
select   intr.research_area_id, proj.research_project_id, stud.student_id, pub.publication_id , prof.professor_id, dep.department_id, c.item_id

from nlidb.professors  as  prof
left join nlidb.research_interest as intr  on intr.professor_id = prof.professor_id
left join nlidb.publications as pub on pub.professor_id = prof.professor_id
left join nlidb.department as dep on prof.department_id = dep.department_id
left join nlidb.research_projects as proj on intr.research_area_id = proj.research_area_id
left Join nlidb.calendar as c on c.professor_id = prof.professor_id
left join nlidb.research_students as stud on prof.professor_id = stud.professor_id;
