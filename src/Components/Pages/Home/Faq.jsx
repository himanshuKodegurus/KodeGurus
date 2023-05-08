import React from 'react'
import './faq.css';

const Faq = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                        Item #1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse laborum nesciunt doloribus quibusdam dolores cumque reiciendis aliquam architecto neque natus omnis velit, veritatis nemo perferendis inventore minus dolorem expedita suscipit qui quidem? Sequi omnis provident quia? Quas atque expedita minima!</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true" aria-controls="flush-collapseTwo">
                                        Item #2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias sequi dolore quaerat sed, nesciunt optio aliquid. Tempora pariatur veritatis ullam est aperiam, cum voluptate, rerum ratione quos omnis obcaecati aspernatur similique ut quia vero exercitationem. Numquam voluptate natus illum!</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="true" aria-controls="flush-collapseThree">
                                        Item #3
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum molestias deleniti cupiditate molestiae possimus sequi ea, vero ducimus saepe temporibus asperiores earum? Temporibus quod ipsa architecto? Sunt, praesentium incidunt.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushSecondExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">
                                        Item #4
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushSecondExample">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas architecto consequuntur ullam sequi! Nobis doloribus voluptatem numquam officiis, atque eius velit, ducimus sint debitis, saepe veritatis libero? Sit voluptatem ipsa quis omnis aliquam vel dicta quo iste, exercitationem incidunt!</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="true" aria-controls="flush-collapseFive">
                                        Item #5
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushSecondExample">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos iste dolor laboriosam eius optio tempora voluptas voluptates assumenda hic reprehenderit sunt fuga nulla ad quos esse quibusdam velit recusandae provident saepe ab. Minus, voluptate aut! Veritatis tenetur nulla dolores.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="true" aria-controls="flush-collapseSix">
                                        Item #6
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushSecondExample">
                                    <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis debitis quis impedit error unde consequatur reprehenderit libero repudiandae, deleniti dolorem! Quasi maiores quo tempore culpa tenetur harum, aliquam, facere, iste at praesentium exercitationem atque odit? Quia ad reiciendis voluptas assumenda.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
