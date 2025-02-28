"use client"
import React, { useState } from "react";
import Layout from "../components/layout";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MyUploads() {

    const [myTranscrips, setMyTranscrips] = useState([
        {
            id: 1, // Added unique ID for each transcript (important for later)
            data: "25/02/2025",
            descricao: "Adicione uma descricão"
        },
        {
            id: 2,
            data: "25/02/2025",
            descricao: "Adicione uma descricão"
        }
    ]);

    const [openDialogId, setOpenDialogId] = useState(null);  // State to track which dialog is open

    const handleCardClick = (transcriptId) => {
        setOpenDialogId(transcriptId); // Set the ID of the card clicked
    };

    const handleDialogClose = () => {
        setOpenDialogId(null); // Reset to close the dialog
    };

    return (
        <>
            <Layout>
                <main className="p-4 space-y-4">
                    {myTranscrips.map((transcript, index) => ( // Access the array within the useState return array
                        <div key={transcript.id}> {/*  Use transcript.id as the key (best practice) */}
                            <Card onClick={() => handleCardClick(transcript.id)} className="w-2/4 h-24 cursor-pointer"> {/* Make the card clickable */}
                                <CardHeader>
                                    <CardTitle>Criação: {transcript.data}</CardTitle>
                                    <CardDescription>{transcript.descricao}</CardDescription>
                                </CardHeader>
                            </Card>

                            <Dialog open={openDialogId === transcript.id} onOpenChange={(open) => { if (!open) handleDialogClose(); }}> {/* Conditionally render based on open state */}
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit Transcript</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Nama
                                            </Label>
                                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="description" className="text-right">
                                                Description
                                            </Label>
                                            <Input id="description" value="adicione descrição" className="col-span-3" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </main>
            </Layout>
        </>
    );

}