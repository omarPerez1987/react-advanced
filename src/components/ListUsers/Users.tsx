import { UserProps } from "@/lib/types/users";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetUserApi } from "./useGetUsersApi";
import { Button } from "../ui/button";

export default function Users() {
  const { users, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetUserApi();

  if (isLoading) return <div>Cargando usuarios...</div>;
  if (isError) return <div>Error al cargar usuarios</div>;
  if (!users) return <div>No existen usuarios</div>;
  if (!hasNextPage) return;

  return (
    <section className="w-full flex justify-center flex-col items-center p-4">
      <h1 className="font-bold text-3xl mb-5">Lista de Usuarios</h1>
      <Table>
        <TableCaption>
          <Button onClick={() => fetchNextPage()}>Cargar más usuarios</Button>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Photo</TableHead>
            <TableHead className="w-[200px]">Full Name</TableHead>
            <TableHead className="w-[400px]">Email</TableHead>
            <TableHead className="w-[200px]">Phone</TableHead>
            <TableHead className="w-[200px]">City</TableHead>
            <TableHead className="w-[200px]">State</TableHead>
            <TableHead className="w-[200px]">Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: UserProps, index: number) => (
            <TableRow key={user.id + index}>
              <TableCell className="font-medium">
                <img src={user.photo}></img>
              </TableCell>
              <TableCell>
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.state}</TableCell>
              <TableCell>{user.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
