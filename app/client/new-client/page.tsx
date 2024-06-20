// 'use client'

// import { saveClient } from "@/lib/clients"
// import { useFormState } from "react-dom"

// export default function NewClient() {

//     const [state, formAction] = useFormState(saveClient, null)


//     return (
//         <main>
//             <form action={formAction}>
//                 <div>
//                     <p>
//                     <label htmlFor="name">Client name</label>
//                     <input type="text" id="name" name="name" required />
//                     </p>
//                     <p>
//                     <label htmlFor="lastname">Client lastname</label>
//                     <input type="text" id="lastname" name="lastname" required />
//                     </p>
//                     <p>
//                     <label htmlFor="email">Client email</label>
//                     <input type="email" id="email" name="email" required />
//                     </p>
//                     <p>
//                     <label htmlFor="document">Client document</label>
//                     <input type="text" id="document" name="document" required />
//                     </p>
//                     <p>
//                     <label htmlFor="birthdate">Client birthdate</label>
//                     <input type="date" id="birthdate" name="birthdate" required />
//                     </p>

//                     <button>Submit Client</button>
//                 </div>
//             </form>
//         </main>
//     )
// }

export default function AddNewClient() {
    return (
        <>
            <h1>New Client Page</h1>
        </>
    )
}