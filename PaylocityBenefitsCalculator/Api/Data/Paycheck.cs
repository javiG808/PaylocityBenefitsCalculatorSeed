﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Data
{
    public class Paycheck
    {
        [Key]
        public int PaycheckId { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal GrossPay { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal TotalDeductions { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal MonthlyBaseDeduction { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal DeductionsPerDependent { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal AdditionalAnnualDeduction { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal AdditionalDeductionPerDependent { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal NetPay { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime PayDate { get; set; }

        public int EmployeeId { get; set; }

        [ForeignKey("EmployeeId")]
        public virtual Employee Employee { get; set; } = null!;
    }
}
