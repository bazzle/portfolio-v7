function Status(){

    const status = 'Learning React (About time)';

    return(
        <section className="status">
            <div className="container">
                <p className="text-mono">
                    Currently: {status}
                </p>
            </div>
        </section>
    )

}

export default Status;