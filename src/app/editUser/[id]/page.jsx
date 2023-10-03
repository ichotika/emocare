import EditUser from "@/components/EditUser";

const getUserById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditUSer({ params }) {
  const { id } = params;
  const { user } = await getUserById(id);
  const {uid,isEmployee,firstName,lastName,email,phone,age,organization} = user;
  

  return (<EditUser id={id} uid={uid} isEmployee={isEmployee} firstName={firstName} lastName={lastName} email={email} phone={phone} age={age} organization={organization}/>);
}