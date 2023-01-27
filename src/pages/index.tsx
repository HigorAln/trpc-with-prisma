import { trpc } from '@/utils/trpc'
import React from 'react'

export default function Home() {
  const trpcClient = trpc.useContext();
  const { mutateAsync: createFeedback } = trpc.createFeedback.useMutation();
  const [feedbacks, setFeedbacks] = React.useState<any>(null)

  async function handleGetFeedbacks(){
    const data = await trpcClient.getCountFeedbacks.fetch();
    setFeedbacks(data.feedbacks)
  }

  async function handleCreateFeedback(){
    await createFeedback({
      type: "QUALQUER",
      content: "Apenas um texto"
    })
  }

  return (
    <>
      <button onClick={() => handleCreateFeedback()}>criar</button>
      <button onClick={() => handleGetFeedbacks()}>Pegar</button>
    </>
  )
}
