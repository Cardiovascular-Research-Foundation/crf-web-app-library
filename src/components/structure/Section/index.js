import { Card, CardContent, CardHeader } from "@mui/material"
import { SectionTitle } from "../../text/Titles"

const Section = props => {
    return <Card>{props.children}</Card>
}

Section.Title = props => {
    return <CardHeader title={<SectionTitle {...props}>{props.children}</SectionTitle>} />
}

Section.Content = props => {
    return <CardContent>{props.children}</CardContent>
}

export default Section
