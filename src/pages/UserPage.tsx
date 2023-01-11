import { useParams } from "react-router";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import "../components/UserPage/Userprofile.scss";
import UserHeading from "../components/UserPage/userHeading";
import UserCard from "../components/UserPage/UserCard";
import UserInformation from "../components/UserPage/UserInformation";
import { UserDataType } from "../layout/userDate";
import axios from "axios";
import { useState, useEffect } from "react";

function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState<UserDataType>(null);

  const getUser = () => {
    axios(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then(({ data }) => setUser(data))
      .catch((error) => error);
  };

  useEffect(() => {
    getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout padding="100px">
      <UserHeading />
      <UserCard
        fullName={
          user ? `${user?.profile.firstName} ${user?.profile.lastName}` : ""
        }
        userId={user ? user?.userId || "Nil" : ""}
        accountBalance={user ? user?.accountBalance : ""}
        accountNumber={user ? user?.accountNumber : ""}
      />
      <div className="userInfo">
        <UserInformation
          className="personalInfoGroup"
          heading="Personal Information"
          info={
            user
              ? [
                  {
                    heading: "FULL NAME",
                    info: `${user?.profile.firstName} ${user?.profile.lastName}`,
                  },
                  {
                    heading: "PHONE NUMBER",
                    info: user?.profile.phoneNumber,
                  },
                  {
                    heading: "EMAIL ADDRESS",
                    info: user?.email,
                  },
                  {
                    heading: "BVN",
                    info: user?.profile.bvn,
                  },
                  {
                    heading: "GENDER",
                    info: user?.profile.gender,
                  },
                  {
                    heading: "MARITAL STATUS",
                    info: "Single",
                  },
                  {
                    heading: "CHILDREN",
                    info: "None",
                  },
                  {
                    heading: "TYPE OF RESIDENCE",
                    info: "Parent's Apartment",
                  },
                ]
              : []
          }
        />
        <UserInformation
          className="educationGroup"
          heading="Education and Employment"
          info={
            user
              ? [
                  {
                    heading: "LEVEL OF EDUCATION",
                    info: user?.education.level,
                  },
                  {
                    heading: "EMPLOYMENT STATUS",
                    info: user?.education.employmentStatus,
                  },
                  {
                    heading: "SECTOR OF EMPLOYMENT",
                    info: user?.education.sector,
                  },
                  {
                    heading: "DURATION OF EMPLOYEMENT",
                    info: user?.education.duration,
                  },
                  {
                    heading: "OFFICE EMAIL",
                    info: user?.education.officeEmail,
                  },
                  {
                    heading: "MONTHLY INCOME",
                    info: user?.education.monthlyIncome.join("-"),
                  },
                  {
                    heading: "LOAN REPAYMENT",
                    info: user?.education.loanRepayment,
                  },
                ]
              : []
          }
        />
        <UserInformation
          className="socialsGroup"
          heading="Socials"
          info={
            user
              ? [
                  {
                    heading: "TWITTER",
                    info: user?.socials.twitter,
                  },
                  {
                    heading: "FACEBOOK",
                    info: user?.socials.facebook,
                  },
                  {
                    heading: "INSTAGRAM",
                    info: user?.socials.instagram,
                  },
                ]
              : []
          }
        />
        <UserInformation
          className="guarantorGroup"
          heading="Guarantor"
          info={
            user
              ? [
                  {
                    heading: "FULL NAME",
                    info: `${user?.guarantor.firstName} ${user?.guarantor.lastName}`,
                  },
                  {
                    heading: "PHONE NUMBER",
                    info: user?.guarantor.phoneNumber,
                  },
                  {
                    heading: "EMAIL ADDRESS",
                    info: user?.guarantor.email || "Nil",
                  },
                  {
                    heading: "RELATIONSHIP",
                    info: user?.guarantor.relationship || "Nil",
                  },
                ]
              : []
          }
        />
        <UserInformation
          className="guarantorGroup"
          heading=""
          info={
            user
              ? [
                  {
                    heading: "FULL NAME",
                    info: "Debby Ogana",
                  },
                  {
                    heading: "PHONE NUMBER",
                    info: "07060780922",
                  },
                  {
                    heading: "EMAIL ADDRESS",
                    info: "debby@gmail.com",
                  },
                  {
                    heading: "RELATIONSHIP",
                    info: "Sister",
                  },
                ]
              : []
          }
        />
      </div>
    </DashboardLayout>
  );
}

export default UserPage;
