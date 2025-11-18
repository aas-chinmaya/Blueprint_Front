import EditTask from "@/modules/project-management/task/components/EditTask";

export default function Page({ params }) {
  const task_id = params.id;
  console.log('task_id from URL:', task_id); // should log the ID from URL

 
  return <EditTask taskId={task_id} />;
}
