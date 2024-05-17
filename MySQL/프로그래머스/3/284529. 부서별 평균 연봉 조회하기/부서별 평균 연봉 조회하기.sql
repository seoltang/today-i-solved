-- 코드를 작성해주세요
select e.DEPT_ID, d.DEPT_NAME_EN, round(avg(e.SAL)) as AVG_SAL
from HR_EMPLOYEES e
left join HR_DEPARTMENT d
on d.DEPT_ID = e.DEPT_ID

group by e.DEPT_ID
order by AVG_SAL desc