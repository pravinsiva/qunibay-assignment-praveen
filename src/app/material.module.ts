import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [
    ],
    imports: [
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule,
        DragDropModule,
        ScrollingModule,
        MatFormFieldModule,
        FormsModule,
        MatPaginatorModule
    ],
    exports: [
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule,
        DragDropModule,
        ScrollingModule,
        MatFormFieldModule,
        FormsModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }
