import Icons from "../components/Dashboard/Icon"

type Navbar = Array<{title: string, children: Array<{title: string, icon: any}>}>

const navbarData: Navbar = [
    {
        title: "customers",
        children: [
            {
                title: "Users",
                icon: Icons.Users
            },
            {
                title: "Guarantors",
                icon: Icons.Guarantors
            },
            {
                title: "Loans",
                icon: Icons.Loans
            },
            {
                title: "Decision Models",
                icon: Icons.DecisionModels
            },
            {
                title: "Savings",
                icon: Icons.Savings
            },
            {
                title: "Loan Requests",
                icon: Icons.LoanRequests
            },
            {
                title: "WhiteLists",
                icon: Icons.WhiteList
            },
            {
                title: "Karma",
                icon: Icons.Karma
            },
        ]
    },
    {
        title: "businesses",
        children: [
            {
                title: "Organization",
                icon: Icons.Organization
            },
            {
                title: "Loan Products",
                icon: Icons.LoanProducts
            },
            {
                title: "Savings Products",
                icon: Icons.SavingsProducts
            },
            {
                title: "Fees and Charges",
                icon: Icons.FeesAndCharges
            },
            {
                title: "Transactions",
                icon: Icons.Transactions
            },
            {
                title: "Services",
                icon: Icons.Services
            },
            {
                title: "Service Account",
                icon: Icons.ServiceAccount
            },
            {
                title: "Settlements",
                icon: Icons.Settlements
            },
            {
                title: "Reports",
                icon: Icons.Reports
            },
        ]
    },
    {
        title: "settings",
        children: [
            {
                title: "Preferences",
                icon: Icons.Prefrences
            },
            {
                title: "Fees and Pricing",
                icon: Icons.FeesAndPricing
            },
            {
                title: "Audit Logs",
                icon: Icons.AuditLogs
            },
        ]
    },
]

export default navbarData