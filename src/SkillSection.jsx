import Skills from "./Skills"

function SkillSection() {

    return (
        <section
            id='skills'
            style={{
                minHeight: '720px',
                marginTop: '80px',
                marginBottom: '80px',
                backgroundColor: '#FFF',
            }}
        >
            <h1 style={{
                textAlign: 'center',
                margin: '32px 0'
            }}
                >
                Skills
            </h1>
            <Skills/>
        </section>
    )
}

export default SkillSection