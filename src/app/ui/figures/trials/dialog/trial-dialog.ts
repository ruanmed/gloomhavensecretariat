import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'ghs-trial-dialog',
    templateUrl: './trial-dialog.html',
    styleUrls: ['./trial-dialog.scss'],
})
export class TrialDialogComponent implements OnInit {

    opened: boolean = false;

    constructor(@Inject(DIALOG_DATA) public data: { edition: string, trial: number }, private dialogRef: DialogRef) { }

    ngOnInit(): void {
        this.opened = true;
    }

    close() {
        this.opened = false;
        setTimeout(() => {
            this.dialogRef.close();
        }, 1000);
    }
}