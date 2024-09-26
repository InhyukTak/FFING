package com.tbtr.ffing.domain.finance.repository;

import com.tbtr.ffing.domain.finance.dto.response.expense.ExpenseRes;
import com.tbtr.ffing.domain.finance.dto.response.expense.CategoryExpenseRes;
import com.tbtr.ffing.domain.finance.entity.ExpenseCategory;

import java.time.LocalDate;
import java.util.List;

public interface ExpenseRepositoryCustom {

    List<ExpenseRes> findMonthlyExpenses(LocalDate startDate, LocalDate endDate, ExpenseCategory category);

    List<CategoryExpenseRes> findWeeklyCategoryExpenses(LocalDate startDate, LocalDate endDate);
}
