
import React, { Component } from "react";
import { connect } from "react-redux";
import { Skeleton, Switch, Card, Icon, Avatar, Button} from 'antd';
import { FuseAnimate, FuseAnimateGroup } from "../../@fuse";

const { Meta } = Card;

class TopBanner extends Component {
state = {
    loading: false,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;
    return (
    <div>
      <Card
          style={{ width: 370, marginTop: 16 }}
          actions={[
            <Button type="primary" key="b1">Level up now</Button>,
            <Icon type="question" key="question" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <FuseAnimate animation="transition.slideUpIn" duration={2000} delay={100}>
            <Meta
              avatar={
                <Avatar shape="square"  size={45} src="https://res.cloudinary.com/chawanangwa/image/upload/v1568776013/LOGO_eea3mz.png" />
              }
              title="Antobolo Level Up"
              description="Earn 2 points with every purchase you make "
            />
            </FuseAnimate>
          </Skeleton>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBanner);
