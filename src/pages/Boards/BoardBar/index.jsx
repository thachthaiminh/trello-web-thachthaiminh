import Box from "@mui/material/Box";
import React from "react";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MENU_STYLES = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  px: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="thachthaiminh"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
            },
          }}
        >
          <Tooltip title="thachthaiminh">
            <Avatar
              alt="thachthaiminh"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/399054462_881650290234336_256229904145980492_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7t8Fwung1PYAX8fUXAe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCK8ZQyJgiObQGDzF8bCBWT-vCXfWztrNZJmd5Vl9U13g&oe=655333B6"
            />
          </Tooltip>
          <Tooltip title="thachthaiminh">
            <Avatar
              alt="thachthaiminh"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/399054462_881650290234336_256229904145980492_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7t8Fwung1PYAX8fUXAe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCK8ZQyJgiObQGDzF8bCBWT-vCXfWztrNZJmd5Vl9U13g&oe=655333B6"
            />
          </Tooltip>
          <Tooltip title="thachthaiminh">
            <Avatar
              alt="thachthaiminh"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/399054462_881650290234336_256229904145980492_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7t8Fwung1PYAX8fUXAe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCK8ZQyJgiObQGDzF8bCBWT-vCXfWztrNZJmd5Vl9U13g&oe=655333B6"
            />
          </Tooltip>
          <Tooltip title="thachthaiminh">
            <Avatar
              alt="thachthaiminh"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/399054462_881650290234336_256229904145980492_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7t8Fwung1PYAX8fUXAe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCK8ZQyJgiObQGDzF8bCBWT-vCXfWztrNZJmd5Vl9U13g&oe=655333B6"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
