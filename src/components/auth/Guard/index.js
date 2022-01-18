import {useSession} from "next-auth/react";

export default function Guard({children}) {

    const { data: session } = useSession()

    if (!session) return false

    return children
}