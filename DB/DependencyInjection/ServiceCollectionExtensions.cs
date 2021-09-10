using System;
using DB.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace DB.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static void AddDmDataBase(this IServiceCollection services, Action<DataBaseOptions> configureOptions)
        {
            var opts = new DataBaseOptions();
            configureOptions(opts);
            
            //add context
            services.AddDbContext<DmContext>(options => 
                options.UseMySql(opts.ConnectionString, ServerVersion.AutoDetect(opts.ConnectionString)));
            
            //add repositories
            services.AddScoped<IDataRepository, DataRepository>();
        }
    }
}