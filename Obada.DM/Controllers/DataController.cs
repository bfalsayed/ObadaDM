﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DB.Models;
using Microsoft.AspNetCore.Mvc;
using Obada.DM.Models;
using Obada.DM.Services;

namespace Obada.DM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        private readonly IDataService _dataService;

        public DataController(IDataService dataService)
        {
            _dataService = dataService;
        }

        [HttpGet("/Departments")]
        public async Task<IEnumerable<Department>> GetDepartments()
        {
            return await _dataService.GetDepartmentsAsync();
        }
        
        [HttpGet("/Professors")]
        public async Task<IList<Professor>> GetProfessors([FromQuery] List<int> departmentId)
        {
            return await _dataService.GetProfessorsAsync(departmentId);
        }
        
        [HttpGet("/Professors/{professorId}")]
        public async Task<ProfessorData> GetProfessorInfo(int professorId)
        {
            var professorIds = new List<int>() {professorId};
            var professor = (await _dataService.GetProfessorsAsync(professorIds))?.FirstOrDefault();
            var students = await _dataService.GetProfessorsStudentsAsync(professorIds);
            var publications = await _dataService.GetProfessorsPublicationsAsync(professorIds);
            var publicationsTimeSeries = _dataService.GeneratePublicationsTimeSeries(publications);
            return new ProfessorData()
            {
                Professor = professor,
                Students = students,
                PublicationsTimeSeries = publicationsTimeSeries
            };
        }
        
        [HttpGet("/Departments/Statistics")]
        public async Task<List<DepartmentData>> GetDepartmentsStatistics()
        {
            var departments = await _dataService.GetDepartmentsAsync();
            var professors = await _dataService.GetDepartmentsProfessorsAsync();
            var publications = await _dataService.GetDepartmentsPublicationsAsync();
            var projects = await _dataService.GetDepartmentsProjectsAsync();
            
            var departmentData = new List<DepartmentData>();
            foreach (var department in departments)
            {
                professors.TryGetValue(department.Id, out var depProfessors);
                publications.TryGetValue(department.Id, out var depPubs);
                projects.TryGetValue(department.Id, out var depProjects);
                departmentData.Add(new DepartmentData()
                {
                    Department = department,
                    Professors = depProfessors,
                    Publications = depPubs,
                    Projects = depProjects
                });
            }

            return departmentData;
        }
    }
}