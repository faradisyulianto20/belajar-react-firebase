import Button from '../../components/button/button-component'

const Shop = () => {
    return (
        <>
            <div className="hero bg-base-200 dark:bg-transparent dark:text-white">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">This is Shop Page</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Button buttonType='green'>Get Started</Button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Shop
