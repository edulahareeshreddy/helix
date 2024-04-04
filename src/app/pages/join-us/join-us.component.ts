import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-join-us',
    templateUrl: './join-us.component.html',
    styleUrls: ['./join-us.component.scss']
})

export class JoinUsComponent {

    steps = [
        {
            key: 'type-of-provider',
            title: 'Type of Provider'
        },
        {
            key: 'provider-info',
            title: 'Provider Information',
        },
        {
            key: 'practice-info',
            title: 'Practice Information',
        },
        {
            key: 'upload-roaster',
            title: 'Upload Roaster',
        }
    ]

    practiceTypes = [
        { value: 'individual', label: 'Individual' },
        { value: 'group', label: 'Group' },
    ];

    providerTypes = [
        { value: 'pcp', label: 'PCP' },
        { value: 'specialist', label: 'Specialist' },
        { value: 'both', label: 'Both' }
    ];

    currentStepIndex: number = 3;

    files: File[] = [];

    constructor(private toastr: ToastrService) {
    }

    onCancel() {
        console.log('onCancel');
    }

    onBack() {
        console.log('onBack');
        this.currentStepIndex--;
    }

    onNext() {
        console.log('onNext');
        this.currentStepIndex++;
    }

    onSubmit() {
        console.log('onSubmit');
        this.toastr.success('Your Letter of Interest has been submitted successfully', 'Congratulations!');
    }

    onRoasterSelect($event: any) {
        this.files = $event.addedFiles;
    }

    onRemoveFile(file: File) {
        this.files = this.files.filter((f) => f !== file);
    }

}
