import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule
    ],
    
})
export class MaterialModule { }