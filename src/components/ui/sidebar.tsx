"use client";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ClipboardList, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import AppImage from "../mui/AppImage";
import { CraftheinzIcon, ShiftIcon, shiftSmartTextIconImage } from "@/assets";
import { useNavigate } from "react-router-dom";
import AppBox from "../mui/AppBox";
import AppHStack from "../mui/AppStack/AppHStack";
import { Divider } from "@mui/material";
//  import { Skeleton } from "@/components/ui/skeleton"

const sidebarVariants = {
  open: {
    width: "15rem",
  },
  closed: {
    width: "3.05rem",
  },
};

const contentVariants = {
  open: { display: "block", opacity: 1 },
  closed: { display: "block", opacity: 1 },
};

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
};

const transitionProps = {
  type: "tween",
  ease: "easeOut",
  duration: 0.2,
  staggerChildren: 0.1,
};

const staggerVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.02 },
  },
};

export function SessionNavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <motion.div
      className={cn("sidebar fixed left-0 z-80 h-full shrink-0 border-r fixed")}
      initial={isCollapsed ? "closed" : "open"}
      animate={isCollapsed ? "closed" : "open"}
      variants={sidebarVariants}
      transition={transitionProps}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <motion.div
        className={`relative z-40 flex text-muted-foreground h-full shrink-0 flex-col bg-white dark:bg-black transition-all`}
        variants={contentVariants}
      >
        <motion.ul variants={staggerVariants} className="flex h-full flex-col">
          <div className="flex grow flex-col items-center">
            <div className="flex h-[54px] w-full shrink-0  border-b p-2">
              <div className=" mt-[1.5px] flex w-full">
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="w-full " asChild>
                    <Link
                      to="/"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-0.5   transition  hover:text-primary",
                        pathname?.includes("dashboard") &&
                          "bg-muted text-blue-600"
                      )}
                    >
                      {/* <LayoutDashboard className="h-4 w-4" />{" "} */}
                      <AppImage
                        src={ShiftIcon}
                        alt={"logo"}
                        sx={{
                          height: "30px",
                          width: "30px",
                          // marginTop: "7px",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/")}
                      />
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          // <p className="ml-2 text-sm font-medium">Dashboard</p>
                          <AppHStack
                            sx={{
                              height: "28px",
                              gap: "13px",
                              width: "260px",
                            }}
                          >
                            <AppImage
                              src={shiftSmartTextIconImage}
                              sx={{
                                padding: "5px 0 5px ",
                                width: "120px",
                                marginLeft: "2px",
                              }}
                            />
                            <Divider orientation="vertical" />
                            <AppBox
                              sx={{
                                border: "1px solid #CBD5E1",
                                borderRadius: "50px",
                                width: "30px",
                                height: "30px",
                              }}
                            >
                              <AppImage
                                sx={{ width: "40px" }}
                                src={CraftheinzIcon}
                                alt="logo"
                              />
                            </AppBox>
                          </AppHStack>
                        )}
                      </motion.li>
                    </Link>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>

            <div className=" flex h-full w-full flex-col">
              <div className="flex grow flex-col gap-4">
                <ScrollArea className="h-16 grow p-2">
                  <div className={cn("flex w-full flex-col gap-3")}>
                    <Link
                      to="/"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-1   transition hover:bg-muted hover:text-primary",
                        pathname?.includes("dashboard") &&
                          "bg-muted text-blue-600"
                      )}
                    >
                      {/* <LayoutDashboard className="h-4 w-4" />{" "} */}
                      <ClipboardList className="h-5 w-7" />
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="ml-2 mt-1 text-sm font-medium">
                            Audits
                          </p>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      to="/trends"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600"
                      )}
                    >
                      {/* <FileClock className="h-4 w-4" /> */}
                      <TrendingUp className="h-5 w-5" />
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="ml-2 text-sm font-medium">Trends</p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
