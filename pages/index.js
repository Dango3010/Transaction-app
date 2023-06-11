// import { Inter } from "next/font/google";
// import { PrismaClient } from "@prisma/client";

// import {
//   getTransactionsGroupedByDate,
//   getThreeTransactions,
//   getCurrentRunningTotal,
//   getTransactionsGroupedByCategory,
//   getBudgets,
//   getCategoriesData,
//   getRecentAndUpcomingTransactions,
//   getRunnigTotalByAccount,
//   getDateByMonthYear,
//   getCategoryInfo,
// } from "../helpers/selectors";
// import { getBudgetAmounts, getBudgetSum } from "../helpers/budgetHelper";
// import { formatDate } from "../helpers/formatters";
// import AccountTile from "../components/ui/AccountTile";
// import TransactionsList from "../components/ui/TransactionsList";
// import Chart from "../components/ui/RunningTotalChart";
// import BudgetCategoriesList from "@/components/ui/BudgetCategoriesList";
// import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="flex flex-row rounded-2xl p-6 h-[6.5rem] bg-base-white sticky top-0 drop-shadow-sm">
        <img src="images/user-icon.png" className="flex h-14" />
        <h1 className="text-4xl ms-5 self-center">Hi, Jane!</h1>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
  // const prisma = new PrismaClient();
  // const currentMonth = new Date().getMonth() + 1;
  // const nextMonth = new Date().getMonth() + 2;
  // const currentYear = new Date().getFullYear();
  // const { month, year } = await getCategoriesData(1, currentMonth, currentYear);

  //data for transactions section
  // const today = new Date().toLocaleDateString().slice(0, 10);
  // const currentTransactionList = await getTransactionsGroupedByDate(
  //   1,
  //   currentMonth,
  //   currentYear,
  //   undefined
  // );
  // const NextMonthTransactionList = await getTransactionsGroupedByDate(
  //   1,
  //   nextMonth,
  //   currentYear,
  //   undefined
  // );
  // Array.prototype.unshift.apply(
  //   currentTransactionList,
  //   NextMonthTransactionList
  // );
  // const recentTransactionList = currentTransactionList; //a transaction list of both current and next months
  // const formattedDates = formatDate(recentTransactionList);
  // const upcomingTransactionList = JSON.parse(
  //   JSON.stringify(recentTransactionList)
  // ).sort((a, b) => new Date(a.date) - new Date(b.date));

  // const arrObj = getRecentAndUpcomingTransactions(
  //   today,
  //   recentTransactionList,
  //   upcomingTransactionList
  // );
  // const transactionsRecent = getThreeTransactions(arrObj.arrRecent);
  // const transactionsUpcoming = getThreeTransactions(arrObj.arrUpcoming, true);

  // //boolean values
  // const indexPage = true;
  // const accountIndex = true;

  // //data for accounts section
  // const accounts = await prisma.account.findMany({
  //   where: { userId: 1 },
  // });
  // const runningTotalbyAccount = await getRunnigTotalByAccount(1);

  // //data for budgets section
  // const budgets = await getBudgets(1, currentMonth, currentYear);
  // const budgetAmounts = await getBudgetAmounts(
  //   await getTransactionsGroupedByCategory(1, currentMonth, currentYear),
  //   await getBudgets(1, currentMonth, currentYear),
  //   await getCategoryInfo()
  // );
  // const inputValues = budgetAmounts.map((element) => {
  //   if (element.totalBudget) {
  //     return element.totalBudget;
  //   } else {
  //     return "";
  //   }
  // });
  // const copiedBudgetAmounts = JSON.parse(JSON.stringify(budgetAmounts));
  // const firstSixBudgets = copiedBudgetAmounts.slice(0, 6);
  // const nextFiveBudgets = copiedBudgetAmounts.splice(6, 5);
  // const lastFiveBudgets = copiedBudgetAmounts.splice(6, 5);
  // const transactionsByCategory = await getTransactionsGroupedByCategory(
  //   1,
  //   currentMonth,
  //   currentYear
  // );
  // const budgetSum = await getBudgetSum(transactionsByCategory, budgets);

  // //data for runningTotal chart
  // const currentRunningTotal = await getCurrentRunningTotal(
  //   currentMonth,
  //   currentYear
  // );

//   return;
// }
