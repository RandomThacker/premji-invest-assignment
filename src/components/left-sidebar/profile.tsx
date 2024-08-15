import React, { useState } from "react";
import { Button, Modal } from "antd";
import userData from "../../utils/user-data.json";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className=" bg-transparent text-left border border-none"
      >
        <div className="flex gap-2 items-center">
          <img
            src={userData.profilePicture}
            alt="pfp"
            className="h-9 w-9 rounded-full"
          />
          <div className="flex flex-col gap-0">
            <p className="text-base text-zinc-200 font-medium">
              {userData.name}
            </p>
            <p className="text-sm text-stone-400 -mt-1">@{userData.username}</p>
          </div>
        </div>
      </button>
      <Modal
        open={open}
        title="My Profile"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Log Out
          </Button>,
        ]}
      >
        <div className="flex mt-5 flex-col">
          <div className="flex gap-2 items-center">
            <img
              src={userData.profilePicture}
              alt="pfp"
              className="h-9 w-9 rounded-full border border-zinc-600"
            />
            <div className="flex flex-col gap-0">
              <p className="text-base text-zinc-800 font-medium">
                {userData.name}
              </p>
              <p className="text-sm text-stone-700 -mt-1">
                @{userData.username}
              </p>
            </div>
          </div>

<p className="mt-10 text-sm font-medium">Statistics</p>
          <div>
            <Row gutter={3}>
              <Col span={100}>
                <Card bordered={false}>
                  <Statistic
                    title="Active Followers"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={100}>
                <Card bordered={false}>
                  <Statistic
                    title="Comments"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={100}>
                <Card bordered={false}>
                  <Statistic
                    title="Likes"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Profile;
