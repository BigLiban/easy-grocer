import {Button, Form, Input} from 'antd';

const LandingPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="container">
                <div className="content-box">
                    <div className="content-container">
                        <div className="writing-box">
                            <h1>Easy Grocer</h1>
                        </div>

                        <div className="searchbar-box">
                            <Form 
                                className="searchbar"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="search"
                                    rules={[
                                        {
                                            required: true,
                                        }
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="description-box">
                    <div className="content-container">
                        <div className="description-writing-box">
                            <h3>
                                Ever wanted to find which store or ecommerce platform offers the lowest price on a specific item that you're looking for? 
                            </h3>
                            <p>
                                Well look no further because Easy Grocer has got you covered. With over 5+ different grocery stores, you can compare prices from various different franchises such as Walmart, Costco, Farmboy, Foodbasics, Zehrs and more!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;