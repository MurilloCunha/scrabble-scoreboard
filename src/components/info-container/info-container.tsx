
interface InfoContainerProps {
    children: React.ReactNode
}

function InfoContainer({ children }: InfoContainerProps) {
    return (
        <article className="info-container" >
            {children}
        </article>
    )
}

export default InfoContainer
