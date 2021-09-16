use nlidb;
insert into research_projects  values
	(130, '2', 'Supervised Machine Learning', null, 1),
    (6, '2', 'Relational Database', null, 3),
    (7, '2', 'Natural Language', null, 11),
    (8, '2', 'Cloud Computing', null, 10),
    (9, '2', 'Semiconductors', null, 8),
    (10, '2', 'Cyper Threads', null, 2),
    (11, '2', 'Web Development', null, 4),
    (12, '2', 'Online Learning Platforms', null, 9);

update calendar set start_date = '2021-09-17', end_date = '2021-09-17', time_from = '12:00:00', time_to = '13:30:00' where item_id in (1, 2);
update calendar set start_date = '2021-09-17', end_date = '2021-09-17', time_from = '14:00:00', time_to = '16:00:00' where item_id in (3, 4);
update calendar set start_date = '2021-09-17', end_date = '2021-09-17', time_from = '16:30:00', time_to = '18:45:00' where item_id in (5, 6);
update calendar set start_date = '2021-09-18', end_date = '2021-09-18', time_from = '9:00:00', time_to = '10:45:00' where item_id in (7, 8, 9);
update calendar set start_date = '2021-09-18', end_date = '2021-09-18', time_from = '13:00:00', time_to = '14:30:00' where item_id in (10);
update calendar set start_date = '2021-09-18', end_date = '2021-09-18', time_from = '15:00:00', time_to = '16:33:00' where item_id in (11, 12, 13, 14);
update calendar set start_date = '2021-09-18', end_date = '2021-09-18', time_from = '17:00:00', time_to = '18:00:00' where item_id in (15, 16, 17);
update calendar set start_date = '2021-09-18', end_date = '2021-09-18', time_from = '20:00:00', time_to = '21:15:00' where item_id in (18, 19);

-- drop database database_warehouse