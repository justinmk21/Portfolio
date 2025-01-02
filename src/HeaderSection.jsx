import Header from "./Header"

function HeaderSection() {

    return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fea8a8',
            maxHeight: '80px'
        }}
        >
        <Header/>
    </div>
    )
}

export default HeaderSection