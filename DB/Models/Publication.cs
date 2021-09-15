using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("publications_dim")]
    public class Publication
    {
        [Key]
        [Column("publication_id")]
        public int Id { get; set; }
        
        [Column("publication_title")]
        public string PublicationTitle { get; set; }
        
        [Column("publication_abstract")]
        public string PublicationAbstract { get; set; }
        
        [Column("journal_name")]
        public string Journal { get; set; }
        
        [Column("conference_name")]
        public string Conference { get; set; }
    }
}