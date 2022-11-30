export interface ContactFormModel {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>
    comments: string;
    setComments: React.Dispatch<React.SetStateAction<string>>
    submitted: boolean
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
    failedSubmit: boolean
    setFailedSubmit: React.Dispatch<React.SetStateAction<boolean>>
}