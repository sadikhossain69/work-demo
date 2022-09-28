import React from 'react';

const CustomerFeedbacks = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-44 gap-5 my-5'>
            {/* <div className="card card-side bg-base-100 shadow-xl rounded-none">
                <figure><img className='w-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Phosfluorescently restore professional
convergence rather than accurate
results. Distinctively extend.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
            <figure class="md:flex shadow rounded-xl p-8 md:p-0">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://placeimg.com/200/280/arch" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            “Phosfluorescently restore professional
                            convergence rather than accurate
                            results, Distinctively extend.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-black font-bold text-lg">
                            Imon Hossain
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            UI/UX Developer
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        </div>
                    </figcaption>
                </div>
            </figure>
            <figure class="md:flex shadow rounded-xl p-8 md:p-0">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://placeimg.com/200/280/arch" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            “Phosfluorescently restore professional
                            convergence rather than accurate
                            results, Distinctively extend.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-black font-bold text-lg">
                            Sarah Dayan
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Developer
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default CustomerFeedbacks;