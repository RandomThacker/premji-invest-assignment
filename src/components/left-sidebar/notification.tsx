import React, { useState, MouseEvent } from "react";
import {
  CloseOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown } from "antd";
import { MenuProps } from "antd/es/menu";
import Bell from "../../assets/icons/bell.svg";

interface Notification {
  text: string;
  link: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      text: "You have a new message",
      link: "#",
    },
    {
      text: "Aryan commented on your post",
      link: "#",
    },
    {
      text: "You got a new like",
      link: "#",
    },
  ]);

  const dismissNotification = (
    index: number,
    event: MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation(); // Stop event propagation to prevent closing the menu
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const items: MenuProps["items"] = [
    
    ...(notifications.length
      ? notifications.map((notification, index) => ({
          key: `notification-${index}`,
          label: (
            <div
              key={`notification-${index}`}
              className="flex items-center justify-between w-[230px]"
            >
              <a
                rel="noopener noreferrer"
                href={notification.link}
                className="flex items-center -ml-1"
              >
                <span>{notification.text}</span>
              </a>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={(event) => dismissNotification(index, event)}
              />
            </div>
          ),
        }))
      : [
          {
            key: "no-notifications",
            label: <span style={{ color: "#ccc" }}>0 notifications</span>,
          },
        ]),
  ];

  return (
    <div>
      <Dropdown
        className="cursor-pointer"
        overlayStyle={{ width: "250px"}}
        menu={{
          items,
        }}
        trigger={["click"]}
      >
          <Badge count={notifications.length} offset={[5, 23]}>
            <button className="flex gap-3 w-fit py-2 px-3 rounded-full hover:bg-zinc-700">
              <img src={Bell} alt="" />
              <p className="text-white text-xl">Notification</p>
            </button>
          </Badge>
      </Dropdown>
    </div>
  );
};

export default Notifications;
