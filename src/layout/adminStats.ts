import Icons from "../components/Dashboard/Icon"

type admin = Array<{
    icon: any,
    name: string,
    stats: string,
    bg: string
}>

const adminStats: admin = [
    {
        icon: Icons.AdminUsers,
        name: "users",
        stats: "2,453",
        bg: "rgb(223 24 255 / 13%)"
    },
    {
        icon: Icons.AdminActiveUsers,
        name: "active users",
        stats: "2,453",
        bg: "rgb(87 24 255 / 13%)"
    },
    {
        icon: Icons.AdminLoans,
        name: "users with loans",
        stats: "12,453",
        bg: "rgb(245 95 68 / 13%)"
    },
    {
        icon: Icons.AdminSavings,
        name: "users with savings",
        stats: "102,453",
        bg: "rgb(255 51 102 / 13%)"
    },
]

export default adminStats